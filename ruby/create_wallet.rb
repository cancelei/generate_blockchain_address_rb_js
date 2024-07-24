require 'bitcoin'

# Set the network to testnet
Bitcoin.chain_params = :testnet

# Generate a new key pair
key = Bitcoin::Key.generate

# Get the address from the key
address = key.to_p2wpkh

puts "Generated testnet address: #{address}"
puts "Private key (WIF format): #{key.to_wif}"
