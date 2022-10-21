class User < ApplicationRecord
    has_many :posts
    has_many :categories
    has_many :subscriptions
end
