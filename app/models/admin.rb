class Admin < ApplicationRecord

    validates_presence_of :first_name, :last_name, :email, :password 

end