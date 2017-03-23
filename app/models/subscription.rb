class Subscription < ApplicationRecord
  validates :name, presence: true

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :email,
    presence: true,
    length: { maximum: 250 },
    uniqueness: { case_sensitive: false },
    format: { with: VALID_EMAIL_REGEX }
end
