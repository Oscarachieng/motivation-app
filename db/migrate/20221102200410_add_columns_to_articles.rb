class AddColumnsToArticles < ActiveRecord::Migration[7.0]
  def change
    add_column :articles, :content_type, :string
  end
end
