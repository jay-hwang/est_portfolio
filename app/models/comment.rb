class Comment < ApplicationRecord
  validates :body,
    :blog,
    :author_name,
    presence: true

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :author_email,
    length: { maximum: 250, allow_nil: true },
    allow_blank: true,
    presence: { :message => '' },
    format: { with: VALID_EMAIL_REGEX }

  belongs_to :blog

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end
