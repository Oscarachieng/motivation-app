class CreateAudios < ActiveRecord::Migration[7.0]
  def change
    create_table :audios do |t|
      t.string :title
      t.string :content
      t.boolean :is_approved
      t.integer :likes
      t.boolean :is_flagged

      t.timestamps
    end
  end
end
