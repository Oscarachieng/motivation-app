class RenameArticles < ActiveRecord::Migration[7.0]
  def change
    rename_table "articles","posts"
  end
end
