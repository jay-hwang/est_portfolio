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
    blogs = Blog.all
    blogs = Blog.find_by_tags(params[:tags]) if params[:tags]
    @blogs = blogs
  end

  def update
    @blog = Blog.find(params[:id])
    if @blog.update(blog_params)
      render :show
    else
      render json: @blog.errors.full_messages, status: 422
    end
  end

  def destroy
    @blog = Blog.find(params[:id])
    id = @blog.id
    @blog.destroy
    render json: id
  end

  private

    def blog_params
      params.require(:blog).permit(
        :author_id,
        :title,
        :body,
        :created_at,
        :updated_at,
        :image_url
      )
    end

    def filter_blogs(filters)
      blogs = Blog.all
      blogs = Blog.find_by_tags(*filters[:tags]) if filters[:tags]
    end
end
