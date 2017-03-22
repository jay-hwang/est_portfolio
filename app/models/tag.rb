class Tag < ApplicationRecord
  validates :name, presence: true

  has_many :taggings
  has_many :blogs,
    through: :taggings,
    source: :blog
end
