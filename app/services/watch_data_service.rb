# app/services/watch_data_service.rb

require "http"

class WatchDataService
  BASE_URL = "https://ethereum.api.watchdata.io/node/jsonrpc".freeze
  API_KEY = "e0bf00f7-bb40-4a66-9f03-d58a6fbefae4".freeze

  def self.get_data(method, params = [])
    url = "#{BASE_URL}?api_key=#{API_KEY}"
    body = {
      jsonrpc: "2.0",
      method: method,
      params: params,
      id: 0
    }.to_json

    puts "Request URL: #{url}"          # Log the request URL for debugging
    puts "Request Body: #{body}"        # Log the request body for debugging

    response = HTTP.headers("Content-Type" => "application/json")
                   .post(url, body: body)

    puts "Response Status: #{response.status}"  # Log the response status
    puts "Response Body: #{response.body}"      # Log the response body

    unless response.status.success?
      raise "Request failed with status #{response.status}: #{response.body}"
    end

    response.parse
  end
end
