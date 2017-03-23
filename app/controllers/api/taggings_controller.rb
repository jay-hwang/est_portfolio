class Api::TaggingsController < ApplicationController
  def create
    @tagging = Tagging.new(tagging_params)
    if @tagging.save
      render :show
    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  def show
    @tagging = Tagging.find(params[:id])
  end

  def index
    @taggings = Tagging.where(blog_id: params[:blogId])
  end

  def destroy
    @tagging = Tagging.find(params[:id])
    id = @tagging.id
    @tagging.destroy
    render json: id
  end

  private

    def tagging_params
      params.require(:tagging).permit(:tag_id, :blog_id)
    end
end
