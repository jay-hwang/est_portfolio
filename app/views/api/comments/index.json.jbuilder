@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment,
      :id,
      :body,
      :blog_id,
      :blog,
      :author_name,
      :author_email,
      :author_id,
      :created_at
  end
end
