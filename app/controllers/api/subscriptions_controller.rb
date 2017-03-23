class Api::SubscriptionsController < ApplicationController
  def create
    @subscription = Subscription.new(subscription_params)
    if @subscription.save
      SubscriptionMailer.welcome_email(@subscription).deliver_now
      render :show
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  def show
    @subscription = Subscription.find(params[:id])
  end

  def index
    @subscriptions = Subscription.all
  end

  def destroy
    @subscription = Subscription.find(params[:id])
    id = @subscription.id
    @subscription.destroy
    render json: id
  end

  private
    def subscription_params
      params.require(:subscription).permit(:name, :email)
    end
end
