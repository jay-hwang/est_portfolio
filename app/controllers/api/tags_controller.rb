class Api::TagsController < ApplicationController
  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def show
    @tag = Tag.find(params[:id])
  end

  def index
    @tags = Tag.all
  end

  def update
    @tag = Tag.find(params[:id])
    if @tag.update(tag_params)
      render :show
    else
      render json: @tag.errors.full_messages, status: 404
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    id = @tag
    @tag.destroy
    render json: id
  end

  private

    def tag_params
      params.require(:tag).permit(:name)
    end
end
