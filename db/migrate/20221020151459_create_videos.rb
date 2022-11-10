class CreateVideos < ActiveRecord::Migration[7.0]
  def change
    create_table :videos do |t|
      t.string :title
      t.boolean :is_approved
      t.integer :likes
      t.boolean :is_flagged
      t.integer :category_id
      t.integer :user_id

      t.timestamps
    end
  end
end
