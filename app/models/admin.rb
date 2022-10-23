class Admin < ApplicationRecord

    validates_presence_of :first_name, :last_name, :email, :password 

    validates :email, uniqueness: true

    validates :password, length: { in: 12..24 }

end