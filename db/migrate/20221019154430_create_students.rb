class CreateStudents < ActiveRecord::Migration[7.0]
  def change
    create_table :students do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :avatar_url
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
