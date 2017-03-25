class Blog < ApplicationRecord
  validates :author, :title, :body, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :comments

  has_many :taggings

  has_many :tags,
    through: :taggings,
    source: :tag

  def self.find_by_tags(*tags)
    Blog.select(
      :id,
      :title,
      :body,
      :author_id,
      :created_at,
      :updated_at
    ).joins(:tags).where(tags: { name: tags })
  end
end
