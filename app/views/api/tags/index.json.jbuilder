@tags.each do |tag|
  json.set! tag.id do
    json.extract! tag,
      :id,
      :name,
      :taggings,
      :blogs
  end
end
