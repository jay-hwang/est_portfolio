class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def destroy
    @comment = Comment.find(params[:id])
    id = @comment.id
    @comment.destroy
    render json: id
  end

  private

    def comment_params
      params.require(:comment).permit(
        :body,
        :blog_id,
        :author_name,
        :author_email,
        :author_id
      )
    end
end
