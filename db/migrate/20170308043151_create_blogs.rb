class CreateBlogs < ActiveRecord::Migration[5.0]
  def change
    create_table :blogs do |t|
      t.integer  :author_id, null: false
      t.string   :title, null: false
      t.text     :body, null: false

      t.timestamps
    end
  end
end
