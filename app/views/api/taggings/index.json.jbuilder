@taggings.each do |tagging|
  json.set! tagging.id do
    json.extract! tagging,
      :id,
      :blog_id,
      :tag_id,
      :blog,
      :tag
  end
end
