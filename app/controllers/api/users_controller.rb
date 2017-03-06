class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :home
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :home
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def home
    @user = User.find(params[:id])
    render :home
  end

  def destroy
    @user = User.find(params[:id])
    byebug
    @user.destroy
    render json: {}
  end

  private
    def user_params
      params.require(:user).permit(
        :first_name,
        :last_name,
        :username,
        :password
      )
    end
end
