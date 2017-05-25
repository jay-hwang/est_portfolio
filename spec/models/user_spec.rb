require 'rails_helper'
begin
  User
rescue
  User = nil
end

RSpec.describe User, :type => :model do
  describe "password encryption" do
    it 'does not save passwords to the database' do
      User.create!(username: 'test_user', password: 'password')
      user = User.find_by_username('test_user')
      expect(user.password).not_to be('password')
    end

    it 'encrypts the password using BCrypt' do
      expect(BCrypt::Password).to receive(:create)
      User.new(username: 'test_user', password: 'password')
    end
  end
end
