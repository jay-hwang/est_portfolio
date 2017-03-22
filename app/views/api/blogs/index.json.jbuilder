@blogs.each do |blog|
  json.set! blog.id do
    json.extract! blog,
      :id,
      :author_id,
      :author,
      :title,
      :body,
      :created_at,
      :updated_at,
      :comments
  end
end
