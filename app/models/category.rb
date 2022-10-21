class Category < ApplicationRecord
    has_many :subscriptions
    has_many :userS,through: :subscriptions
end
