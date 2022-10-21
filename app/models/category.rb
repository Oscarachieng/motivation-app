class Category < ApplicationRecord
    has_many :students
    has_many :subscriptions
end
