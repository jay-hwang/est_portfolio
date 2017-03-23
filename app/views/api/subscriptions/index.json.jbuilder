@subscriptions.each do |subscription|
  json.set! subscription.id do
    json.extract! subscription,
      :id,
      :name,
      :email
  end
end
