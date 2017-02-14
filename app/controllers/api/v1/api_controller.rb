require_relative '../../../factory/factory.rb'

class Api::V1::ApiController < ApplicationController
  respond_to :json



  # Shows a single image with ID. Example id:635142652
  def show
    success = true
    status = 200
    image = Factory.find_image(params[:id])
    unless image.key?("ErrorCode")
      success = false
      status = 401
    end
      render json: {data: image, success:success}, status:status
  end

  # List of images regarding search_term
  def search
    success = true
    status = 200
    images = Factory.search_images(params[:phrase])
    unless images["result_count"] != 0
      success = false
      status = 404
    end
    render json: {data: images, success:success}, status:status
  end
end
