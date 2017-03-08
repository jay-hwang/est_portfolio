class Api::BlogsController < ApplicationController
  def create
    @blog = Blog.new(blog_params)
    if @blog.save
      render :show
    else
      render json: @blog.errors.full_messages, status: 422
    end
  end

  def show
    @blog = Blog.find(params[:id])
  end

  def index
    @blogs = Blog.all
  end

  def update
    @blog = Blog.find(params[:id]))
    if @blog.update(blog_params)
      render :show
    else
      render json: @blog.errors.full_messages, status: 422
    end
  end

  def destroy
    @blog = Blog.find(params[:id])
    @blog.destroy
    render json: {}
  end

  private

    def blog_params
      params.require(:blog).permit(
        :author_id,
        :title,
        :body
      )
    end
end
