class CreateVideoComments < ActiveRecord::Migration[7.0]
  def change
    create_table :video_comments do |t|
      t.string :comment
      t.string :likes
      t.belongs :user, null:false, foreign_key: true
      t.belongs :video, null:false, foreign_key:true
      t.timestamps
    end
  end
end
