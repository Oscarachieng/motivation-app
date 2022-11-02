class Category < ApplicationRecord
    has_many :subscriptions
    has_many :users
    has_many :posts 

end
