class Wish < ApplicationRecord
    belongs_to :student
    has_many :articles
    has_many :videos
    has_many :audios
end
