var store = [{
        "title": "PPPoE on OpenBSD",
        "excerpt":"Some ISP&#8217;s establish connections with their customers' networks through PPPoE. I recently setup an OpenBSD 6.6 router which required PPPoE. This is my story. DNS Servers If necessary, configure your system to use your preferred DNS nameservers. A common way of connecting to your ISP&#8217;s network is through DHCP. DHCP...","categories": ["Networking"],
        "tags": ["BSD","OpenBSD","OpenBSD6","OpenBSD66","PPPoE"],
        "url": "/pppoe-on-openbsd",
        "teaser": null
      },{
        "title": "DNSSEC With Unbound",
        "excerpt":"Ever want to enable DNSSEC on your Unbound OpenBSD 6.6 server? Me too! Using this article as a guide, I document the process. Unbound Configuration Use the ftp command to download the Root Hints. ftp -o /var/unbound/etc/root.hints https://www.internic.net/domain/named.root Download the trust anchor file with the unbound-anchor utility. unbound-anchor Configure unbound.conf....","categories": ["Networking"],
        "tags": ["BSD","DNS","DNSSEC","OpenBSD","OpenBSD6","OpenBSD66","Unbound"],
        "url": "/dnssec-with-unbound",
        "teaser": null
      },{
        "title": "Unbound Adblock",
        "excerpt":"Ever want to get rid of all those annoying internet ads? Me too. I&#8217;d been planning on using something like Pi-hole, but recently stumbled upon unbound-adblock, which is perfect for my OpenBSD home router. The setup is very well-documented there, but I provide my own, slightly-modified setup instructions here. Most...","categories": ["Networking"],
        "tags": ["Adblock","BSD","DNS","OpenBSD","OpenBSD6","OpenBSD67","Pihole","Unbound","unbound-adblock"],
        "url": "/unbound-adblock",
        "teaser": null
      },{
        "title": "PF Badhost",
        "excerpt":"Blocking connections to nefarious IP addresses in your firewall is usually a good idea. On OpenBSD, the pf-badhost script updates PF to block traffic to and from such addresses. This post walks through my installation and verification of pf-badhost. Make sure to check out the well-written installation instructions, too. Configure...","categories": ["Networking"],
        "tags": ["BSD","Firewall","OpenBSD","OpenBSD6","OpenBSD67","PF","pf-badhost"],
        "url": "/pf-badhost",
        "teaser": null
      },{
        "title": "IPv6 on OpenBSD",
        "excerpt":"Configuring IPv6 on my OpenBSD home router was a much more difficult task than I&#8217;d expected. While this was mostly due to the steep learning curve of IPv6 and DHCPv6, OpenBSD doesn&#8217;t provide DHCPv6 support in its native DHCP daemon. I&#8217;ve documented my setup and difficulties here in the hope...","categories": ["Networking"],
        "tags": ["BSD","DHCPCD","DHCPv6","Firewall","IPv6","OpenBSD","OpenBSD6","OpenBSD67","PF"],
        "url": "/openbsd-ipv6",
        "teaser": null
      },{
        "title": "OpenSMTPD Relay on Ubuntu",
        "excerpt":"It can be handy to have your system email you if it detects an issue or potential security risk. Unfortunately, this isn&#8217;t always straightforward, especially when you want to send an email from your desktop computer. Sending an email directly from your desktop to your email account is likely going...","categories": ["Networking"],
        "tags": ["2FA","Email","GMail","Linux","OpenSMTPD","OpenSMTPD6","SMTP","Ubuntu","Ubuntu2004"],
        "url": "/opensmtpd-ubuntu",
        "teaser": null
      },{
        "title": "Automatically Detect and Report Hard Drive Failure",
        "excerpt":"I recently fixed my mother-in-law&#8217;s laptop. Long story short, the hard disk was toast. When I repaired the computer, I decided it would be best to avoid the frustration and confusion of a failing hard drive in the future. So, how does one know if his or her mother-in-law&#8217;s hard...","categories": ["Disks"],
        "tags": ["Email","Linux","OpenSMTPD","SMART","smartd","SmartMonTools","SMTP","Ubuntu","Ubuntu2004"],
        "url": "/automatically-detect-and-report-hard-drive-failure",
        "teaser": null
      },{
        "title": "DNS Over TLS With Unbound",
        "excerpt":"Recently, Firefox announced it&#8217;s roll-out of DNS over HTTPS (DoH). That made me think, \"Encrypting DNS&#8230;&#8203; Why don&#8217;t I do that for my home network?\" Well, I&#8217;ve now had the opportunity to configure my Unbound DNS resolver to encrypt it&#8217;s DNS requests. Unbound has support built-in for DoH&#8217;s sibling protocol,...","categories": ["Networking"],
        "tags": ["BSD","DNS","DoT","OpenBSD","OpenBSD6","OpenBSD67","TLS","Unbound"],
        "url": "/dns-over-tls-with-unbound",
        "teaser": null
      },{
        "title": "UniFi Controller",
        "excerpt":"For wi-fi, I use use a UniFi AP. One slightly annoying aspect of this is the UniFi Controller. If you don&#8217;t have a smartphone or need to manage more than one device, you&#8217;ll need to set one up. I provide a brief tutorial for setting up the UniFi Controller with...","categories": ["Networking"],
        "tags": ["Containers","Docker","DockerCompose","Linux","UniFi","UniFiController","Ubuntu","Ubuntu2004"],
        "url": "/unifi-controller",
        "teaser": null
      },{
        "title": "Install ZFS on the Pinebook Pro",
        "excerpt":"Recently, I obtained a 64-bit ARM, budget Linux laptop, the Pinebook Pro. It&#8217;s a wonderful, sleek little notebook, boasting great convenience and power-efficiency. I enjoy using it so much, it&#8217;s becoming my main machine, and I&#8217;d love love to put all of my music, audiobooks, pictures, and ebooks on it....","categories": ["Disks"],
        "tags": ["ArchLinux","Linux","Manjaro","PinebookPro","ZFS"],
        "url": "/install-zfs-on-the-pinebook-pro",
        "teaser": null
      },{
        "title": "Backup Docker Data",
        "excerpt":"Backups are super helpful, especially when you like to blow everything away fairly often. Backing up the data from a Docker container can help you quickly get things up and running again. Tutorial My recent post detailed how to setup a UniFi Controller in a Docker container. This tutorial uses...","categories": ["Systems"],
        "tags": ["Containers","Docker","Linux","Ubuntu","Ubuntu2004"],
        "url": "/backup-docker-data",
        "teaser": null
      },{
        "title": "External Storage on the Pinebook Pro With ZFS",
        "excerpt":"This tutorial is out-of-date and will be updated when I get ZFS working again on the Pinebook Pro. The Pinebook Pro comes with a small amount of internal disk space, only 64 GB. While this is upgradeable to 128 GB, that still isn&#8217;t enough for those with large media collections....","categories": ["Disks"],
        "tags": ["ArchLinux","Linux","Manjaro","PinebookPro","ZFS"],
        "url": "/external-storage-on-the-pinebook-pro-with-zfs",
        "teaser": null
      },{
        "title": "Update U-Boot on the Pinebook Pro",
        "excerpt":"The other day, Elementary announced elementaryOS 6 preview builds for the Pinebook Pro. I went ahead and flashed an SD card with a build image to try it out. Instead of booting to elmentaryOS on the SD card as the system should have, it booted to Manjaro. While a quick...","categories": ["Systems"],
        "tags": ["ArchLinux","Boot","Linux","Manjaro","PinebookPro","UBoot"],
        "url": "/update-u-boot-on-the-pinebook-pro",
        "teaser": null
      },{
        "title": "Update U-Boot on the PinePhone",
        "excerpt":"As I big fan of GNOME, I really wanted a similar experience on the PinePhone. That&#8217;s why I opted for running Manjaro ARM's alpha for the PinePhone, which comes in a GNOME-like Phosh flavor. It&#8217;s been running from the SD card great so far, but I thought to update the...","categories": ["Systems"],
        "tags": ["ArchLinux","Boot","Linux","Manjaro","PinePhone","UBoot"],
        "url": "/update-u-boot-on-the-pinephone",
        "teaser": null
      },{
        "title": "Virtualize Ubuntu Desktop on macOS with QEMU",
        "excerpt":"The Focal Fossa nestles in on Santa Catalina Island Recently, I discovered that QEMU is available on macOS, with support for Apple&#8217;s native Hypervisor framework. This is particularly exciting because I have to spin-up Linux VMs on macs at my day job, and I&#8217;ve wanted to get some more hands-on...","categories": ["Systems"],
        "tags": ["Homebrew","Linux","macOS","MacPorts","QEMU","Ubuntu","Ubuntu2004","virtio","Virtualization"],
        "url": "/virtualize-ubuntu-desktop-on-macos-with-qemu",
        "teaser": null
      },{
        "title": "Easily Virtualize Ubuntu MATE on macOS With Multipass",
        "excerpt":"It&#8217;s Always Greener on the MATE Side While I was working on my recent post Virtualize Ubuntu Desktop on macOS with QEMU, I came across Canonical&#8217;s Multipass utility. Multipass makes it extremely simple to spin up Ubuntu instances on the fly whether your on Linux, macOS, and Windows. While your...","categories": ["Systems"],
        "tags": ["Homebrew","Linux","macOS","MacPorts","MATE","Multipass","Ubuntu","Ubuntu2004","Virtualization"],
        "url": "/easily-virtualize-ubuntu-mate-on-macos-with-multipass",
        "teaser": null
      },{
        "title": "One-Liner to Fetch the Latest Github Release",
        "excerpt":"Sometimes, it would be awfully convenient to grab the installer for the latest release of your favorite Github project directly from the command-line. And if it could incorporate awk, that would be great too.[1] Well, the following command-line is a pretty nifty template to do just that! You will need...","categories": ["Command-Line"],
        "tags": ["awk","cURL","Linux","macOS","git","Github","Wget"],
        "url": "/one-liner-to-fetch-the-latest-github-release",
        "teaser": null
      },{
        "title": "Password-Less Sudo",
        "excerpt":"Typing a password to login is repetitive enough, isn&#8217;t it? Entering the password for Sudo on the command-line can be downright irritating. If you don&#8217;t need that extra bit of protection, why enter your password more than you have to?[1] You can forever skip entering your sudo password, and it&#8217;s...","categories": ["Command-Line"],
        "tags": ["Linux","macOS","sudo"],
        "url": "/password-less-sudo",
        "teaser": null
      },{
        "title": "Configure ZSH",
        "excerpt":"I&#8217;ve been using ZSH for years now as my shell. In that time, I&#8217;ve learned a few niceties to make the experience better. Namely, I&#8217;ve found the minimal oh-my-zsh prompt keeps out of the way and the git aliases super convenient. Plugins for autosuggestions, like in the fish shell, and...","categories": ["Command-Line"],
        "tags": ["Antigen","Debian","Linux","oh-my-zsh","Ubuntu","ZSH"],
        "url": "/configure-zsh",
        "teaser": null
      },{
        "title": "Automatically Update Antigen",
        "excerpt":"There&#8217;s a catch when it comes to managing plugins with Antigen as done in Configure ZSH. According to the Antigen documentation: This is something you might not want to put in your .zshrc. Instead, run it occasionally to update your plugins. &#8212; Antigen Wiki: Commands - antigen update I hate...","categories": ["Service Management"],
        "tags": ["Antigen","CentOS","Linux","oh-my-zsh","RedHat","systemd","Ubuntu","ZSH"],
        "url": "/automatically-update-antigen",
        "teaser": null
      },{
        "title": "My SSH Configuration",
        "excerpt":"The OpenSSH client and server applications are ubiquitous. Like many a software dev, I&#8217;m `ssh&#8217;ing all over the place. And you know what? I&#8217;ve put off learning the ins and outs of its configuration for far too long. I learned that a little bit of know-how can simplify my day-to-day...","categories": ["Networking"],
        "tags": ["BSD","KeePassXC","Linux","macOS","OpenSSH","ssh"],
        "url": "/my-ssh-configuration",
        "teaser": null
      },{
        "title": "Change your Shell",
        "excerpt":"Sometimes, you just want to switch to a better shell for your terminal - like fish. Tutorial Here&#8217;s a quick run through of how to change your default login shell which assumes you understand the basics of the command-line on Unix-like systems. These instructions are exemplified on an Ubuntu 20.04...","categories": ["Command-Line"],
        "tags": ["BSD","fish","Linux","macOS","shell","Ubuntu"],
        "url": "/change-your-shell",
        "teaser": null
      },{
        "title": "\"Too many open files\" When Compiling on macOS",
        "excerpt":"Occasionally things just go wrong during large builds. One such occurrence is on macOS when compiling a large C&#43;&#43; project. Problem The following error message is output by LLVM Clang 10.0.1 when compiling from the command-line. The Clion IDE builds the project just fine, of course. $ cmake --build build...","categories": ["Command-Line"],
        "tags": ["Catalina","fish","launchd","macOS","shell","ulimit"],
        "url": "/too-many-open-files-on-macos-when-compiling",
        "teaser": null
      },{
        "title": "Switch to fish",
        "excerpt":"I&#8217;ve finally made the switch from ZSH to the fish shell. Unlike ZSH, I don&#8217;t need to install and manage a whole host of plugins. Everything I want comes packaged right in as part of the shell itself. The Switch In this post, I describe how to switch to the...","categories": ["Command-Line"],
        "tags": ["Debian","fish","Linux","shell","Ubuntu"],
        "url": "/switch-to-fish",
        "teaser": null
      },{
        "title": "Solarized Vim",
        "excerpt":"I enjoy the Solarized color scheme, so I figured out how to set it up in Vim. The Solarized color scheme provides a plugin for Vim, which makes this pretty straightfoward. The following instructions detail how to do this on Ubuntu 20.04, but other than the installation step, this should...","categories": ["Command-Line"],
        "tags": ["BSD","Editor","Linux","macOS","Solarized","Ubuntu","Unix","Vim"],
        "url": "/solarized-vim",
        "teaser": null
      },{
        "title": "Pagers and Syntax Highlighting",
        "excerpt":"bat is a helpful alternative to cat when you want peruse files on the command-line with the improved readability that syntax highlighting has to offer. The Rust program boasts a wide selection of color themes, automatically uses the system pager when needed, provides syntax highlighting for man pages, and even...","categories": ["Command-Line"],
        "tags": ["bat","Linux","less","Rust","Solarized","Ubuntu","Unix"],
        "url": "/pagers-and-syntax-highlighting",
        "teaser": null
      },{
        "title": "Git Syntax Highlighting",
        "excerpt":"If you like to use git from the command-line and enjoy syntax highlighting, you might be interested in delta, which adds this functionality and more to git. Tutorial This tutorial walks through installing and configuring delta, version 0.4.4 at the time of writing, on an amd64 system running Ubuntu 20.04....","categories": ["Command-Line"],
        "tags": ["delta","git","Linux","Rust","Solarized","Ubuntu","Unix"],
        "url": "/git-syntax-highlighting",
        "teaser": null
      },{
        "title": "X11 Forwarding",
        "excerpt":"A Remote Instance of GNOME Terminal Viewed on macOS Catalina Opening a graphical application on a remote machine and displaying it locally is super convenient. With OpenSSH and X11, this is trivially accomplished via X11 forwarding. X11 Forwarding This tutorial walks through running a graphical application remotely via X11 forwarding....","categories": ["Networking"],
        "tags": ["OpenSSH","SSH","X11"],
        "url": "/x11-forwarding",
        "teaser": null
      },{
        "title": "Manage Runtimes With asdf",
        "excerpt":"asdf is a language-agnostic tool for managing multiple runtimes of a specific tool for a particular user. While it is able to manage runtime versions for a user, it is particularly helpful for managing runtimes per project. Tools like rbenv, pyenv, nvm, goenv, and the like each solve this problem...","categories": ["Development"],
        "tags": ["asdf","Linux","Ubuntu","Unix"],
        "url": "/manage-runtimes-with-asdf",
        "teaser": null
      },{
        "title": "Generate an SSH Key",
        "excerpt":"Entering passwords is a pain. I know you agree. Why not enter passwords less by using SSH? You&#8217;ll just need a key and a little know-how to get started. Generate an SSH Key SSH is ubiquitous. It&#8217;s used by developers and systems administrators every day all across the globe to...","categories": ["Command-Line"],
        "tags": ["BSD","Linux","macOS","OpenSSH","SSH"],
        "url": "/generate-an-ssh-key",
        "teaser": null
      },{
        "title": "Grow Disk Space on a CentOS 7 VM Using QEMU, LVM, and XFS",
        "excerpt":"Sometimes you just need some more disk space. Expanding the size of a virtual disk, though, is not necessarily as easy as you&#8217;d hope. Having just done this on a CentOS 7 virtual machine, I document how to do so here. Thanks goes to the article How to extend Linux...","categories": ["Disks"],
        "tags": ["CentOS","disk","filesystem","Linux","LVM","QEMU","XFS"],
        "url": "/grow-disk-space-on-a-centos-7-vm-using-qemu-lvm-and-xfs",
        "teaser": null
      },{
        "title": "Build GCC From Source on CentOS 7",
        "excerpt":"CentOS has a pretty old compiler. While the Software Collections repository contains newer versions, it still has a considerable lag-time. So, why not build GCC from source? As it turns out, it&#8217;s not actually that hard. Tutorial This tutorial provides the steps necessary to compile and install a newer version...","categories": ["Development"],
        "tags": ["C","C&#43;&#43;","CentOS","Fortran","Linux","Compiler","GCC"],
        "url": "/build-gcc-from-source-on-centos-7",
        "teaser": null
      },{
        "title": "Fresh fish on CentOS 7",
        "excerpt":"Are you desperate for the freshest fish? Well, you&#8217;ve come to the right place. Tutorial The instructions herein describe how to install a much newer version of the fish shell, version 3.1.2, from source on CentOS 7. Further instructions for building fish are available from the fish documentation. For this...","categories": ["Command-Line"],
        "tags": ["CentOS","fish","Linux","shell"],
        "url": "/fresh-fish-on-centos-7",
        "teaser": null
      },{
        "title": "Install Git From Source on CentOS 7",
        "excerpt":"To get the latest version of Git on CentOS 7, it is possible to compile it directly from source. Tutorial This is a quick tutorial showing the necessary steps to install Git from source on CentOS 7. Further documentation is available in the Git Book. This tutorial assumes familiarity with...","categories": ["Development"],
        "tags": ["CentOS","Git","Linux"],
        "url": "/install-git-from-source-on-centos-7",
        "teaser": null
      },{
        "title": "Manage Python Dependencies",
        "excerpt":"Making Python dependency management reproducible is complicated. Bringing Python dependency management to mere mortals who can&#8217;t remember where they put their shoes, let alone remember to source shell scripts every time they start working on a project is even more complicated. So, here&#8217;s a quick breakdown of how it works...","categories": ["Development"],
        "tags": ["asdf","direnv","Linux","Pipenv","Python","Ubuntu","Unix"],
        "url": "/manage-python-dependencies",
        "teaser": null
      },{
        "title": "Backup and Restore a GPG Key",
        "excerpt":"Gnu Privacy Guard, also known as GnuPG and GPG, is a handy tool for managing OpenPGP keys. While don&#8217;t use PGP keys for email encryption as many people do, I do use a PGP key to sign my work when using Git. PGP keys can be a bit nastier to...","categories": ["Systems"],
        "tags": ["Backups","GnuPG","GPG","OpenPGP","Ubuntu"],
        "url": "/backup-and-restore-a-gpg-key",
        "teaser": null
      },{
        "title": "Generate a GPG Key",
        "excerpt":"GPG keys can be used to cryptographically sign Git commits, pushes, and tags. This associates your work with a particular identity. GPG is also used for encrypting and signing emails. To do these things, you first need a GPG key. Tutorial The instructions here describe the steps to generate a...","categories": ["Systems"],
        "tags": ["Backups","GnuPG","GPG","OpenPGP","Ubuntu"],
        "url": "/generate-a-gpg-key",
        "teaser": null
      },{
        "title": "Git and GPG",
        "excerpt":"GPG keys can be used to cryptographically sign your work when using Git for version control. This ties your identity to your work, whether that&#8217;s a commit, tag, or even a push. Gitea, GitHub, GitLab, and other popular Git hosting services support visualizing this feature when browsing changes, showing which...","categories": ["Development"],
        "tags": ["Cryptography","Git","GnuPG","GPG","OpenPGP","Ubuntu"],
        "url": "/git-and-gpg",
        "teaser": null
      },{
        "title": "Snapping on the Pinebook Pro",
        "excerpt":"Snaps are an incredible new packaging format for Linux from Canonical.[1] They offer application confinement and increased portability while also simplifying the development workflow. Recently I submitted a pull-request to extend the Sublime Merge snap with support for arm64 so that I could use it on my Pinebook Pro. Testing...","categories": ["Packaging"],
        "tags": ["arm64","Armbian","Linux","LXC","PinebookPro","Snapcraft","Ubuntu"],
        "url": "/snapping-on-the-pinebook-pro",
        "teaser": null
      },{
        "title": "Backup Git Repositories",
        "excerpt":"If you have any source code repositories hosted online, you probably don&#8217;t want to lose those. Just yesterday I converted my professional resume from the OpenDocument Format to a version controlled Asciidoctor project. This prompted me to do an important task I&#8217;d been putting off for some time, backing up...","categories": ["Systems"],
        "tags": ["Backup","fish","Git","Linux","SSH","systemd","Ubuntu"],
        "url": "/backup-git-repositories",
        "teaser": null
      },{
        "title": "A Multi-Boot USB With Ventoy",
        "excerpt":"My daily driver predates Dell&#8217;s support for the Linux Vendor Firmware Service, usually abbreviated LVFS. The only way to update my motherboard&#8217;s UEFI is through Windows, which I means I&#8217;ll need a Windows 10 USB installer. Creating a USB installer on Ubuntu is typically as easy as opening GNOME Disks,...","categories": ["Disks"],
        "tags": ["Boot","Disk","GNOME","Linux","Installer","ISO","Ubuntu","Ubuntu2004","udisks","USB","Ventoy","Windows","Windows10"],
        "url": "/a-multi-boot-usb-with-ventoy",
        "teaser": null
      },{
        "title": "Create a Windows 10 USB on Ubuntu",
        "excerpt":"I needed a to install Windows 10 from a USB recently. I&#8217;ve described my preferred method of accomplishing this in my recent post A Multi-Boot USB With Ventoy. Before I thought to use Ventoy, I created such an installer following this nifty article How to Create a Bootable Windows 10...","categories": ["Disks"],
        "tags": ["Boot","Disks","gdisk","GNOME","gnome-disk-image-mounter","Installer","ISO","Linux","sgdisk","Ubuntu","Ubuntu2004","udisks","USB","Windows","Windows10"],
        "url": "/create-a-windows-10-usb-on-ubuntu",
        "teaser": null
      },{
        "title": "GNOME Keyring in KDE Plasma",
        "excerpt":"I love GNOME, but on my Pinebook Pro, I use the extremely well-supported Manjaro Pinebook Pro KDE Plasma edition. One of the biggest gripes I have with KDE Plasma is that it doesn&#8217;t automatically manage my OpenSSH and GPG keys. I&#8217;m used to having my SSH and GPG key unlocked...","categories": ["Developer"],
        "tags": ["GNOME","GPG","KDE","Keyring","Manjaro","PinebookPro","Plasma","SSH"],
        "url": "/gnome-keyring-in-kde-plasma",
        "teaser": null
      },{
        "title": "Btrfs Mount Options",
        "excerpt":"So, let&#8217;s say you&#8217;ve installed a fresh system on Btrfs. Now what? Well, Btrfs doesn&#8217;t ship with optimal default settings. Many popular Linux distributions don&#8217;t improve the situation, either. That leaves it up to the administrator to fine tune Btrfs for its particular use case. The primary way to tune...","categories": ["Disks"],
        "tags": ["Btrfs","fstab","Linux","mount"],
        "url": "/btrfs-mount-options",
        "teaser": null
      },{
        "title": "Btrfs Swapfile",
        "excerpt":"Swap space is a standard component of most operating systems. It&#8217;s effectively reserved disk space for accommodating a system when it needs more RAM than it has available. I recommend the opensource.com article An Introduction to Swap Space on Linux Systems as a great primer on the topic. There are...","categories": ["Disks"],
        "tags": ["Btrfs","Linux","swap","swapfile"],
        "url": "/btrfs-swapfile",
        "teaser": null
      },{
        "title": "Why Choose Btrfs",
        "excerpt":"There are many compelling reasons to use a modern Copy-on-Write, CoW for short, filesystem. These include low-cost snapshots and incremental backups. If that&#8217;s not compelling, the two most popular open source CoW filesystems, OpenZFS and Btrfs, offer many more features. Compression, redundancy, deduplication, native encryption, online defragmentation, and data integrity...","categories": ["Disks"],
        "tags": ["bcachefs","Btrfs","CoW","filesystem","Fedora","FreeBSD","Linux","OpenZFS","openSUSE","NetBSD","snapshots","ZFS"],
        "url": "/why-choose-btrfs",
        "teaser": null
      },{
        "title": "Power Management on Linux With TLP",
        "excerpt":"TLP is a powerful power management utility for Linux. It helps conserve battery life on mobile Linux devices by taking advantage of various kernel features. It&#8217;s also super easy to add to a system and requires no extra configuration after installation. Though, it does expose quite a bit of configuration...","categories": ["Systems"],
        "tags": ["elementary","Linux","TLP","Ubuntu"],
        "url": "/power-management-on-linux-with-tlp",
        "teaser": null
      },{
        "title": "Btrfs Layout",
        "excerpt":"One of the best features of Btrfs is the ability to produce snapshots of data instantaneously. Rollbacks take advantage of Btrfs to revert the system, or any subvolume, to a previous state like before that major kernel update. This is an extremely valuable feature. Unfortunately, to take advantage of a...","categories": ["Disks"],
        "tags": ["AppImage","AppImageLauncher","asdf","Btrfs","CoW","Cargo","Conan","elementary","FHS","filesystem","Flatpak","fstab","Gnome-Boxes","libvirt","Linux","openSUSE","Podman","Rust","Snapper","snapshots","systemd","Ubuntu","xdg-base"],
        "url": "/btrfs-layout",
        "teaser": null
      },{
        "title": "Btrfs Snapshot Management With Snapper",
        "excerpt":"Manually taking snapshots with Btrfs is easy. Managing said snapshots is not. This is why several tools exist for the task. The most prominent are Btrbk, Snapper, and Timeshift. Each of these automate taking, naming, and cleaning up snapshots. Btrbk is highly configurable and flexible while also offering incremental backups....","categories": ["Disks"],
        "tags": ["Btrbk","Btrfs","elementary","Linux","Snapper","snapshots","Timeshift","Ubuntu"],
        "url": "/btrfs-snapshot-management-with-snapper",
        "teaser": null
      },{
        "title": "Adjust Mount Options",
        "excerpt":"Mounting filesystems on Linux is simple, right? Just use mount(8), specify the recurring stuff in fstab(5), and everything&#8217;s peachy. For both better and worse, there&#8217;s more to it than that. Filesystem dependencies are handled by systemd and tools like udev(7), udisks2, and GIO provide userspace access to devices. Imagine not...","categories": ["Disks"],
        "tags": ["Btrfs","elementary","fstab","GIO","Linux","mount","systemd","Ubuntu","udev","udisks2"],
        "url": "/adjust-mount-options",
        "teaser": null
      },{
        "title": "Encrypt an External Disk on Linux",
        "excerpt":"Encrypting your data is pretty much a must anyone who is privacy or security conscious. I find it quite handy for not only protecting my data in use, but also the best way to make recycling old disks secure and simple. I keep local backups on an external hard drive,...","categories": ["Disks"],
        "tags": ["backups","Btrfs","Cryptsetup","elementary","encryption","fstab","GIO","Linux","systemd","udisks2","Ubuntu"],
        "url": "/encrypt-an-external-disk-on-linux",
        "teaser": null
      },{
        "title": "Install udisks2 From Source",
        "excerpt":"I recently posted Adjust Mount Options which explains in detail how to configure mount options for udisks2. Unfortunately, the reference operating system, Ubuntu 18.04, doesn&#8217;t use a new enough version of udisks2. In fact, even Ubuntu 20.04 doesn&#8217;t contain a new enough version. So, what should you do if you...","categories": ["Disks"],
        "tags": ["Btrfs","elementary","Linux","mount","Ubuntu","udisks2"],
        "url": "/install-udisks2-from-source",
        "teaser": null
      },{
        "title": "Automount an Encrypted System Volume",
        "excerpt":"If you run an encrypted Linux system, it&#8217;s helpful to understand how the system handles mounting and decrypting filesystems. A Linux desktop user and tinkerer who runs on an encrypted root, might find this knowledge inevitably becomes practical. The general mechanics used for an encrypted root volume apply to encrypting...","categories": ["Disks"],
        "tags": ["automount","Btrfs","Cryptsetup","crypttab","elementary","encryption","fstab","Linux","mount","systemd","Ubuntu"],
        "url": "/automount-an-encrypted-system-volume",
        "teaser": null
      },{
        "title": "Backup Snapper Snapshots With snap-sync",
        "excerpt":"In Btrfs Snapshot Management With Snapper, the process is described for automating Btrfs snapshots with Snapper. Why stop there when you can use these snapshots for incremental backups? This isn&#8217;t the most difficult thing to script yourself, but why do more work than you have to? The Bash script snap-sync...","categories": ["Disks"],
        "tags": ["backups","Btrbk","Btrfs","elementary","encryption","Linux","snap-sync","Snapper","snapshots","systemd","Ubuntu"],
        "url": "/backup-snapper-snapshots-with-snap-sync",
        "teaser": null
      },{
        "title": "Install Podman on Ubuntu",
        "excerpt":"Podman is a daemonless container runtime for Linux compatible with Docker. It offers several advantages over using Docker to manage and run containers. First, there is no overhead associated with running a background service as is the case with Docker. Podman also allows users to run rootless containers which provides...","categories": ["Virtualization"],
        "tags": ["Btrfs","containers","Docker","elementary","Kubernetes","Linux","Podman","systemd","Ubuntu","ZFS"],
        "url": "/install-podman-on-ubuntu",
        "teaser": null
      },{
        "title": "Podman With Btrfs and ZFS",
        "excerpt":"Podman has storage backends for both Btrfs and ZFS. Using these backends allows Podman to take full advantage of the underlying CoW filesystem. This is a quick guide on enabling these storage drivers. Enable the Btrfs and ZFS Storage Drivers for Podman Below are the necessary steps to enable the...","categories": ["Disks"],
        "tags": ["Btrfs","containers","CoW","filesystem","Linux","Podman","ZFS"],
        "url": "/podman-with-btrfs-and-zfs",
        "teaser": null
      },{
        "title": "Install libvirt on elementary OS 5.1",
        "excerpt":"If you want to run virtual machines on Linux, chances are you&#8217;re going to use libvirt. I make use of it all the time, especially for testing these blog posts in a clean environment. libvirt provides a common interface around various underlying tools for virtual machine management. It not only...","categories": ["Virtualization"],
        "tags": ["Boxes","Btrfs","elementary","KVM","libvirt","Linux","QEMU","systemd","Ubuntu","virsh","virt-manager","VM"],
        "url": "/install-libvirt-on-elementary-os-5-1",
        "teaser": null
      },{
        "title": "GNOME Boxes on Btrfs",
        "excerpt":"So, you&#8217;ve got libvirt installed on your Linux box and your looking for a simple application for running virtual machines. Look no further than Boxes, so far as it meets your needs, of course. What&#8217;s that you ask? What do you need to figure out to run on this on...","categories": ["Virtualization"],
        "tags": ["Boxes","Btrfs","elementary","GNOME","KVM","libvirt","Linux","QEMU","Ubuntu","virt-manager","VM"],
        "url": "/gnome-boxes-on-btrfs",
        "teaser": null
      },{
        "title": "Btrfs Scrub",
        "excerpt":"You probably want to take advantage of the data integrity checking offered by Btrfs. Btrfs calculates checksums for all data written to disk. These checksums are used to verify the data hasn&#8217;t been unduly altered. While data is verified every time it is read, what about the data that isn&#8217;t...","categories": ["Disks"],
        "tags": ["Arch","Btrfs","Linux","scrub","systemd","ZFS"],
        "url": "/btrfs-scrub",
        "teaser": null
      },{
        "title": "Podman Compose",
        "excerpt":"Podman supports the Kubernetes YAML format for configuring pods. Unfortunately, I&#8217;m coming to the Podman scene from Docker where the Docker Compose format is common. The Docker Compose format isn&#8217;t supported by Podman. I don&#8217;t really want to invest the time in learning a new configuration file format right now,...","categories": ["Virtualization"],
        "tags": ["containers","Docker","DockerCompose","Kubernetes","Linux","Podman","PodmanCompose","Ubuntu"],
        "url": "/podman-compose",
        "teaser": null
      },{
        "title": "Translate Docker Compose to Kubernetes With Podman",
        "excerpt":"Podman ships with built-in support for Kubernetes configuration files but not for Docker Compose. As described in Podman Compose, the Podman Compose utility can use Docker Compose files to create Podman containers. However, you might want to migrate to the Kubernetes format, eschewing Podman Compose and Docker Compose entirely. This...","categories": ["Virtualization"],
        "tags": ["containers","Docker","Docker-Compose","Kubernetes","Linux","Podman","podman-compose","Ubuntu"],
        "url": "/translate-docker-compose-to-kubernetes-with-podman",
        "teaser": null
      }]
