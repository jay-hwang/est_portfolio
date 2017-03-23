class SubscriptionMailer < ApplicationMailer
  default from: 'jayhwang0121@gmail.com'

  def welcome_email(subscription)
    @subscription = subscription
    mail(
      to: @subscription.email,
      subject: "Welcome To Tackling Trafficking #{@subscription.name}!"
    )
  end
end
