class CreateAudioComments < ActiveRecord::Migration[7.0]
  def change
    create_table :audio_comments do |t|
      t.string :comment
      t.integer :likes
      t.belongs_to :audio, null:false, foreign_key: true
      t.belongs_to :user,null:false, foreign_key:true
      t.timestamps
    end
  end
end
