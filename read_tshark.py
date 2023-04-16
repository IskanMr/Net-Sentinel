import subprocess

# Dengan menggunakan Tshark untuk capture data
tshark_cmd = "tshark -i <interface> -T fields \
              -e frame.protocols \
              -e ip.src \
              -e ip.dst \
              -e tcp.srcport \
              -e tcp.dstport \
              -e udp.srcport \
              -e udp.dstport \
              -e frame.len \
              -e frame.time_epoch \
              -e data \
              -E header=n \
              -E separator=, \
              -E quote=d \
              -E occurrence=f"

# Run Tshark command untuk output data
p = subprocess.Popen(tshark_cmd.split(), stdout=subprocess.PIPE)

# Read output yang didapat
for line in p.stdout:
    # proses tiap baris output
    fields = line.strip().split(",")
    # Extract parameter yang diinginkan
    protocol = fields[0].split(":")[0]
    src_ip = fields[1]
    dst_ip = fields[2]
    src_port = fields[3] if fields[3].isdigit() else ""
    dst_port = fields[4] if fields[4].isdigit() else ""
    pkt_size = fields[5]
    time_established = fields[6]
    frequency = 1 / float(fields[7]) if fields[7].isdigit() and int(fields[7]) > 0 else 0
    payload = fields[8] if len(fields) >= 9 else ""
    behavior = ""  # ini akan ditambahkan untuk determine behaviour dengan IDS
    
    # setelah ini baru proses IDS dan flagging
    # ...

