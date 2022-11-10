class CreateVideoComments < ActiveRecord::Migration[7.0]
  def change
    create_table :video_comments do |t|
      t.string :comment
      t.string :likes
      t.integer :user_id
      t.belongs_to :video, null:false, foreign_key:true
      t.timestamps
    end
  end
end
