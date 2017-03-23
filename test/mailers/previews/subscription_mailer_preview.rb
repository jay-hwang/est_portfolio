# Preview all emails at http://localhost:3000/rails/mailers/subscription_mailer
class SubscriptionMailerPreview < ActionMailer::Preview
  def sample_mail_preview
    SubscriptionMailer.sample_email(Subscription.last)
  end
end
