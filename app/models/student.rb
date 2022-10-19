class Student < ApplicationRecord

    has_many :categories
    has_many :subscriptions
    has_many :wishes
    has_many :posts

end
