# app/controllers/api/watch_data_controller.rb

class Api::WatchDataController < ApplicationController
  protect_from_forgery with: :exception

  def create
    method = params[:method]
    rpc_params = params[:params] || []
    data = WatchDataService.get_data(method, rpc_params)
    render json: data
  rescue StandardError => e
    Rails.logger.error "Error fetching data from WatchData API: #{e.message}"
    render json: { error: e.message }, status: :unprocessable_entity
  end
end
