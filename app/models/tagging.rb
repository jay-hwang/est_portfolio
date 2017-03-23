class Tagging < ApplicationRecord
  validates :tag, :blog, presence: true
  validates :tag_id, uniqueness: { scope: :blog_id }

  belongs_to :tag
  belongs_to :blog
end
