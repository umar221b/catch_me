module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_guest

    def connect
      self.current_guest = fill_guest
    end

    protected

    def fill_guest
      if cookies[:name].present?
        { name: cookies[:name], color: cookies[:color] }
      else
        reject_unauthorized_connection
      end
    end
  end
end
