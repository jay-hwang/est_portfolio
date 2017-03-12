@blogs.each do |blog|
  json.set! blog.id do
    json.extract! blog,
      :id,
      :title,
      :created_at
  end
end
