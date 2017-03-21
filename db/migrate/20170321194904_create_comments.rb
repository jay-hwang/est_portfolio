class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.text     :body,         null: false
      t.integer  :blog_id,      null: false
      t.string   :author_name,  null: false
      t.string   :author_email
      t.integer  :author_id,    null: false, default: 3

      t.timestamps
    end
  end
end
