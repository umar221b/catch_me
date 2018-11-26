class CanvasChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'canvas'
    ActionCable.server.broadcast('canvas', message: 'subscribed', user_info: current_guest)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    ActionCable.server.broadcast('canvas', message: 'unsubscribed', user_info: current_guest)
  end

  def move(data)
    ActionCable.server.broadcast('canvas', message: 'move', coordinates: data['coordinates'], user_info: current_guest)
  end
end
