class CreateAudioCommentReplies < ActiveRecord::Migration[7.0]
  def change
    create_table :audio_comment_replies do |t|
      t.string :user_id
      t.string :reply
      t.string :likes
      t.belongs_to :audio_comment,null:false,foreign_key:true
      t.timestamps
    end
  end
end
