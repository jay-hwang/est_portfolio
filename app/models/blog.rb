class Blog < ApplicationRecord
  validates :author, :title, :body, null: false

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end
