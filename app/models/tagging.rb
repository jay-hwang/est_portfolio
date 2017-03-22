class Tagging < ApplicationRecord
  validates :tag, :blog, presence: true

  belongs_to :tag
  belongs_to :blog
end
