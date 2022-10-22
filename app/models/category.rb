class Category < ApplicationRecord
    has_many :subscriptions
    has_many :users,through: :subscriptions
    has_many :articles
    has_many :audios
    has_many :videos
end
