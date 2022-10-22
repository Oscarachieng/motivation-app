class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :content
      t.boolean :is_approved
      t.integer :likes
      t.boolean :is_flagged
      t.belongs_to :category,null:false, foreign_key:true
      t.belongs_to :user,null: false,foreign_key:true

      t.timestamps
    end
  end
end
