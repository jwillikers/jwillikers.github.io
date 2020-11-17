var store = [{
        "title": "PPPoE on OpenBSD",
        "excerpt":"Some ISP&#8217;s establish connections with their customers' networks through PPPoE. I recently setup an OpenBSD 6.6 router which required PPPoE. This is my story. DNS Servers If necessary, configure your system to use your preferred DNS nameservers. A common way of connecting to your ISP&#8217;s network is through DHCP. DHCP...","categories": ["Networking"],
        "tags": ["BSD","OpenBSD","OpenBSD6","OpenBSD66","PPPoE"],
        "url": "https://www.jwillikers.com/pppoe-on-openbsd",
        "teaser": null
      },{
        "title": "DNSSEC With Unbound",
        "excerpt":"Ever want to enable DNSSEC on your Unbound OpenBSD 6.6 server? Me too! Using this article as a guide, I document the process. Unbound Configuration Use the ftp command to download the Root Hints. ftp -o /var/unbound/etc/root.hints https://www.internic.net/domain/named.root Download the trust anchor file with the unbound-anchor utility. unbound-anchor Configure unbound.conf....","categories": ["Networking"],
        "tags": ["BSD","DNS","DNSSEC","OpenBSD","OpenBSD6","OpenBSD66","Unbound"],
        "url": "https://www.jwillikers.com/dnssec-with-unbound",
        "teaser": null
      },{
        "title": "Unbound Adblock",
        "excerpt":"Ever want to get rid of all those annoying internet ads? Me too. I&#8217;d been planning on using something like Pi-hole, but recently stumbled upon unbound-adblock, which is perfect for my OpenBSD home router. The setup is very well-documented there, but I provide my own, slightly-modified setup instructions here. Most...","categories": ["Networking"],
        "tags": ["Adblock","BSD","DNS","OpenBSD","OpenBSD6","OpenBSD67","Pihole","Unbound","unbound-adblock"],
        "url": "https://www.jwillikers.com/unbound-adblock",
        "teaser": null
      },{
        "title": "PF Badhost",
        "excerpt":"Blocking connections to nefarious IP addresses in your firewall is usually a good idea. On OpenBSD, the pf-badhost script updates PF to block traffic to and from such addresses. This post walks through my installation and verification of pf-badhost. Make sure to check out the well-written installation instructions, too. Configure...","categories": ["Networking"],
        "tags": ["BSD","Firewall","OpenBSD","OpenBSD6","OpenBSD67","PF","pf-badhost"],
        "url": "https://www.jwillikers.com/pf-badhost",
        "teaser": null
      },{
        "title": "IPv6 on OpenBSD",
        "excerpt":"Configuring IPv6 on my OpenBSD home router was a much more difficult task than I&#8217;d expected. While this was mostly due to the steep learning curve of IPv6 and DHCPv6, OpenBSD doesn&#8217;t provide DHCPv6 support in its native DHCP daemon. I&#8217;ve documented my setup and difficulties here in the hope...","categories": ["Networking"],
        "tags": ["BSD","DHCPCD","DHCPv6","Firewall","IPv6","OpenBSD","OpenBSD6","OpenBSD67","PF"],
        "url": "https://www.jwillikers.com/openbsd-ipv6",
        "teaser": null
      },{
        "title": "OpenSMTPD Relay on Ubuntu",
        "excerpt":"It can be handy to have your system email you if it detects an issue or potential security risk. Unfortunately, this isn&#8217;t always straightforward, especially when you want to send an email from your desktop computer. Sending an email directly from your desktop to your email account is likely going...","categories": ["Networking"],
        "tags": ["2FA","Email","GMail","Linux","OpenSMTPD","OpenSMTPD6","SMTP","Ubuntu","Ubuntu2004"],
        "url": "https://www.jwillikers.com/opensmtpd-ubuntu",
        "teaser": null
      },{
        "title": "Automatically Detect and Report Hard Drive Failure",
        "excerpt":"I recently fixed my mother-in-law&#8217;s laptop. Long story short, the hard disk was toast. When I repaired the computer, I decided it would be best to avoid the frustration and confusion of a failing hard drive in the future. So, how does one know if his or her mother-in-law&#8217;s hard...","categories": ["Systems"],
        "tags": ["Email","Linux","OpenSMTPD","SMART","smartd","SmartMonTools","SMTP","Ubuntu","Ubuntu2004"],
        "url": "https://www.jwillikers.com/automatically-detect-and-report-hard-drive-failure",
        "teaser": null
      },{
        "title": "DNS Over TLS With Unbound",
        "excerpt":"Recently, Firefox announced it&#8217;s roll-out of DNS over HTTPS (DoH). That made me think, \"Encrypting DNS&#8230;&#8203; Why don&#8217;t I do that for my home network?\" Well, I&#8217;ve now had the opportunity to configure my Unbound DNS resolver to encrypt it&#8217;s DNS requests. Unbound has support built-in for DoH&#8217;s sibling protocol,...","categories": ["Networking"],
        "tags": ["BSD","DNS","DoT","OpenBSD","OpenBSD6","OpenBSD67","TLS","Unbound"],
        "url": "https://www.jwillikers.com/dns-over-tls-with-unbound",
        "teaser": null
      },{
        "title": "UniFi Controller",
        "excerpt":"For wi-fi, I use use a UniFi AP. One slightly annoying aspect of this is the UniFi Controller. If you don&#8217;t have a smartphone or need to manage more than one device, you&#8217;ll need to set one up. I provide a brief tutorial for setting up the UniFi Controller with...","categories": ["Networking"],
        "tags": ["Containers","Docker","DockerCompose","Linux","UniFi","UniFiController","Ubuntu","Ubuntu2004"],
        "url": "https://www.jwillikers.com/unifi-controller",
        "teaser": null
      },{
        "title": "Install ZFS on the Pinebook Pro",
        "excerpt":"Recently, I obtained a 64-bit ARM, budget Linux laptop, the Pinebook Pro. It&#8217;s a wonderful, sleek little notebook, boasting great convenience and power-efficiency. I enjoy using it so much, it&#8217;s becoming my main machine, and I&#8217;d love love to put all of my music, audiobooks, pictures, and ebooks on it....","categories": ["Systems"],
        "tags": ["ArchLinux","Linux","Manjaro","PinebookPro","ZFS"],
        "url": "https://www.jwillikers.com/install-zfs-on-the-pinebook-pro",
        "teaser": null
      },{
        "title": "Backup Docker Data",
        "excerpt":"Backups are super helpful, especially when you like to blow everything away fairly often. Backing up the data from a Docker container can help you quickly get things up and running again. Tutorial My recent post detailed how to setup a UniFi Controller in a Docker container. This tutorial uses...","categories": ["Systems"],
        "tags": ["Containers","Docker","Linux","Ubuntu","Ubuntu2004"],
        "url": "https://www.jwillikers.com/backup-docker-data",
        "teaser": null
      },{
        "title": "External Storage on the Pinebook Pro With ZFS",
        "excerpt":"This tutorial is out-of-date and will be updated when I get ZFS working again on the Pinebook Pro. The Pinebook Pro comes with a small amount of internal disk space, only 64 GB. While this is upgradeable to 128 GB, that still isn&#8217;t enough for those with large media collections....","categories": ["Systems"],
        "tags": ["ArchLinux","Linux","Manjaro","PinebookPro","ZFS"],
        "url": "https://www.jwillikers.com/external-storage-on-the-pinebook-pro-with-zfs",
        "teaser": null
      },{
        "title": "Update U-Boot on the Pinebook Pro",
        "excerpt":"The other day, Elementary announced elementaryOS 6 preview builds for the Pinebook Pro. I went ahead and flashed an SD card with a build image to try it out. Instead of booting to elmentaryOS on the SD card as the system should have, it booted to Manjaro. While a quick...","categories": ["Systems"],
        "tags": ["ArchLinux","Linux","Manjaro","PinebookPro","UBoot"],
        "url": "https://www.jwillikers.com/update-u-boot-on-the-pinebook-pro",
        "teaser": null
      },{
        "title": "Update U-Boot on the PinePhone",
        "excerpt":"As I big fan of GNOME, I really wanted a similar experience on the PinePhone. That&#8217;s why I opted for running Manjaro ARM's alpha for the PinePhone, which comes in a GNOME-like Phosh flavor. It&#8217;s been running from the SD card great so far, but I thought to update the...","categories": ["Systems"],
        "tags": ["ArchLinux","Linux","Manjaro","PinePhone","UBoot"],
        "url": "https://www.jwillikers.com/update-u-boot-on-the-pinephone",
        "teaser": null
      },{
        "title": "Virtualize Ubuntu Desktop on macOS with QEMU",
        "excerpt":"The Focal Fossa nestles in on Santa Catalina Island Recently, I discovered that the Linux hypervisor, QEMU, is available on macOS. This is particularly exciting because I have to spin-up Linux VMs on macs at my day job, and I&#8217;ve wanted to get some more hands-on experience with QEMU. QEMU...","categories": ["Systems"],
        "tags": ["Homebrew","Linux","macOS","MacPorts","QEMU","Ubuntu","Ubuntu2004","virtio","Virtualization"],
        "url": "https://www.jwillikers.com/virtualize-ubuntu-desktop-on-macos-with-qemu",
        "teaser": null
      },{
        "title": "Easily Virtualize Ubuntu MATE on macOS With Multipass",
        "excerpt":"It&#8217;s Always Greener on the MATE Side While I was working on my recent post Virtualize Ubuntu Desktop on macOS with QEMU, I came across Canonical&#8217;s Multipass utility. Multipass makes it extremely simple to spin up Ubuntu instances on the fly whether your on Linux, macOS, and Windows. While your...","categories": ["Systems"],
        "tags": ["Homebrew","Linux","macOS","MacPorts","MATE","Multipass","Ubuntu","Ubuntu2004","Virtualization"],
        "url": "https://www.jwillikers.com/easily-virtualize-ubuntu-mate-on-macos-with-multipass",
        "teaser": null
      },{
        "title": "One-Liner to Fetch the Latest Github Release",
        "excerpt":"Sometimes, it would be awfully convenient to grab the installer for the latest release of your favorite Github project directly from the command-line. And if it could incorporate awk, that would be great too.[1] Well, the following command-line is a pretty nifty template to do just that! You will need...","categories": ["Command-Line"],
        "tags": ["awk","cURL","Linux","macOS","git","Github","Wget"],
        "url": "https://www.jwillikers.com/one-liner-to-fetch-the-latest-github-release",
        "teaser": null
      },{
        "title": "Password-Less Sudo",
        "excerpt":"Typing a password to login is repetitive enough, isn&#8217;t it? Entering the password for Sudo on the command-line can be downright irritating. If you don&#8217;t need that extra bit of protection, why enter your password more than you have to?[1] You can forever skip entering your sudo password, and it&#8217;s...","categories": ["Command-Line"],
        "tags": ["Linux","macOS","sudo"],
        "url": "https://www.jwillikers.com/password-less-sudo",
        "teaser": null
      },{
        "title": "Configure ZSH",
        "excerpt":"I&#8217;ve been using ZSH for years now as my shell. In that time, I&#8217;ve learned a few niceties to make the experience better. Namely, I&#8217;ve found the minimal oh-my-zsh prompt keeps out of the way and the git aliases super convenient. Plugins for autosuggestions, like in the fish shell, and...","categories": ["Command-Line"],
        "tags": ["Antigen","Debian","Linux","oh-my-zsh","Ubuntu","ZSH"],
        "url": "https://www.jwillikers.com/configure-zsh",
        "teaser": null
      },{
        "title": "Automatically Update Antigen",
        "excerpt":"There&#8217;s a catch when it comes to managing plugins with Antigen as done in Configure ZSH. According to the Antigen documentation: This is something you might not want to put in your .zshrc. Instead, run it occasionally to update your plugins. &#8212; Antigen Wiki: Commands - antigen update I hate...","categories": ["Service Management"],
        "tags": ["Antigen","CentOS","Linux","oh-my-zsh","RedHat","systemd","Ubuntu","ZSH"],
        "url": "https://www.jwillikers.com/automatically-update-antigen",
        "teaser": null
      },{
        "title": "My SSH Configuration",
        "excerpt":"The OpenSSH client and server applications are ubiquitous. Like many a software dev, I&#8217;m `ssh&#8217;ing all over the place. And you know what? I&#8217;ve put off learning the ins and outs of its configuration for far too long. I learned that a little bit of know-how can simplify my day-to-day...","categories": ["Networking"],
        "tags": ["BSD","KeePassXC","Linux","macOS","OpenSSH","ssh"],
        "url": "https://www.jwillikers.com/my-ssh-configuration",
        "teaser": null
      },{
        "title": "Change your Shell",
        "excerpt":"Sometimes, you just want to switch to a better shell for your terminal - like fish. Tutorial Here&#8217;s a quick run through of how to change your default login shell which assumes you understand the basics of the command-line on Unix-like systems. These instructions are exemplified on an Ubuntu 20.04...","categories": ["Command-Line"],
        "tags": ["BSD","fish","Linux","macOS","shell","Ubuntu"],
        "url": "https://www.jwillikers.com/change-your-shell",
        "teaser": null
      },{
        "title": "\"Too many open files\" When Compiling on macOS",
        "excerpt":"Occasionally things just go wrong during large builds. One such occurrence is on macOS when compiling a large C&#43;&#43; project. Problem The following error message is output by LLVM Clang 10.0.1 when compiling from the command-line. The Clion IDE builds the project just fine, of course. $ cmake --build build...","categories": ["Command-Line"],
        "tags": ["Catalina","fish","launchd","macOS","shell","ulimit"],
        "url": "https://www.jwillikers.com/too-many-open-files-on-macos-when-compiling",
        "teaser": null
      },{
        "title": "Switch to fish",
        "excerpt":"I&#8217;ve finally made the switch from ZSH to the fish shell. Unlike ZSH, I don&#8217;t need to install and manage a whole host of plugins. Everything I want comes packaged right in as part of the shell itself. The Switch In this post, I describe how to switch to the...","categories": ["Command-Line"],
        "tags": ["Debian","fish","Linux","shell","Ubuntu"],
        "url": "https://www.jwillikers.com/switch-to-fish",
        "teaser": null
      },{
        "title": "Solarized Vim",
        "excerpt":"I enjoy the Solarized color scheme, so I figured out how to set it up in Vim. The Solarized color scheme provides a plugin for Vim, which makes this pretty straightfoward. The following instructions detail how to do this on Ubuntu 20.04, but other than the installation step, this should...","categories": ["Command-Line"],
        "tags": ["BSD","Editor","Linux","macOS","Solarized","Ubuntu","Unix","Vim"],
        "url": "https://www.jwillikers.com/solarized-vim",
        "teaser": null
      },{
        "title": "Pagers and Syntax Highlighting",
        "excerpt":"bat is a helpful alternative to cat when you want peruse files on the command-line with the improved readability that syntax highlighting has to offer. The Rust program boasts a wide selection of color themes, automatically uses the system pager when needed, provides syntax highlighting for man pages, and even...","categories": ["Command-Line"],
        "tags": ["bat","Linux","less","Rust","Solarized","Ubuntu","Unix"],
        "url": "https://www.jwillikers.com/pagers-and-syntax-highlighting",
        "teaser": null
      },{
        "title": "Git Syntax Highlighting",
        "excerpt":"If you like to use git from the command-line and enjoy syntax highlighting, you might be interested in delta, which adds this functionality and more to git. Tutorial This tutorial walks through installing and configuring delta, version 0.4.4 at the time of writing, on an amd64 system running Ubuntu 20.04....","categories": ["Command-Line"],
        "tags": ["delta","git","Linux","Rust","Solarized","Ubuntu","Unix"],
        "url": "https://www.jwillikers.com/git-syntax-highlighting",
        "teaser": null
      },{
        "title": "X11 Forwarding",
        "excerpt":"A Remote Instance of GNOME Terminal Viewed on macOS Catalina Opening a graphical application on a remote machine and displaying it locally is super convenient. With OpenSSH and X11, this is trivially accomplished via X11 forwarding. X11 Forwarding This tutorial walks through running a graphical application remotely via X11 forwarding....","categories": ["Networking"],
        "tags": ["OpenSSH","SSH","X11"],
        "url": "https://www.jwillikers.com/x11-forwarding",
        "teaser": null
      },{
        "title": "Manage Runtimes With asdf",
        "excerpt":"asdf is a language-agnostic tool for managing multiple runtimes of a specific tool for a particular user. While it is able to manage runtime versions for a user, it is particularly helpful for managing runtimes per project. Tools like rbenv, pyenv, nvm, goenv, and the like each solve this problem...","categories": ["Development"],
        "tags": ["asdf","Linux","Ubuntu","Unix"],
        "url": "https://www.jwillikers.com/manage-runtimes-with-asdf",
        "teaser": null
      },{
        "title": "Generate an SSH Key",
        "excerpt":"Entering passwords is a pain. I know you agree. Why not enter passwords less by using SSH? You&#8217;ll just need a key and a little know-how to get started. Generate an SSH Key SSH is ubiquitous. It&#8217;s used by developers and systems administrators every day all across the globe to...","categories": ["Command-Line"],
        "tags": ["BSD","Linux","macOS","OpenSSH","SSH"],
        "url": "https://www.jwillikers.com/generate-an-ssh-key",
        "teaser": null
      },{
        "title": "Grow Disk Space on a CentOS 7 VM Using QEMU, LVM, and XFS",
        "excerpt":"Sometimes you just need some more disk space. Expanding the size of a virtual disk, though, is not necessarily as easy as you&#8217;d hope. Having just done this on a CentOS 7 virtual machine, I document how to do so here. Thanks goes to the article How to extend Linux...","categories": ["Systems"],
        "tags": ["CentOS","disk","filesystem","Linux","LVM","QEMU","XFS"],
        "url": "https://www.jwillikers.com/grow-disk-space-on-a-centos-7-vm-using-qemu-lvm-and-xfs",
        "teaser": null
      },{
        "title": "Build GCC From Source on CentOS 7",
        "excerpt":"CentOS has a pretty old compiler. While the Software Collections repository contains newer versions, it still has a considerable lag-time. So, why not build GCC from source? As it turns out, it&#8217;s not actually that hard. Tutorial This tutorial provides the steps necessary to compile and install a newer version...","categories": ["Development"],
        "tags": ["C","C&#43;&#43;","CentOS","Fortran","Linux","Compiler","GCC"],
        "url": "https://www.jwillikers.com/build-gcc-from-source-on-centos-7",
        "teaser": null
      },{
        "title": "Fresh fish on CentOS 7",
        "excerpt":"Are you desperate for the freshest fish? Well, you&#8217;ve come to the right place. Tutorial The instructions herein describe how to install a much newer version of the fish shell, version 3.1.2, from source on CentOS 7. Further instructions for building fish are available from the fish documentation. For this...","categories": ["Command-Line"],
        "tags": ["CentOS","fish","Linux","shell"],
        "url": "https://www.jwillikers.com/fresh-fish-on-centos-7",
        "teaser": null
      },{
        "title": "Install Git From Source on CentOS 7",
        "excerpt":"To get the latest version of Git on CentOS 7, it is possible to compile it directly from source. Tutorial This is a quick tutorial showing the necessary steps to install Git from source on CentOS 7. Further documentation is available in the Git Book. This tutorial assumes familiarity with...","categories": ["Development"],
        "tags": ["CentOS","Git","Linux"],
        "url": "https://www.jwillikers.com/install-git-from-source-on-centos-7",
        "teaser": null
      },{
        "title": "Manage Python Dependencies",
        "excerpt":"Making Python dependency management reproducible is complicated. Bringing Python dependency management to mere mortals who can&#8217;t remember where they put their shoes, let alone remember to source shell scripts every time they start working on a project is even more complicated. So, here&#8217;s a quick breakdown of how it works...","categories": ["Development"],
        "tags": ["asdf","direnv","Linux","Pipenv","Python","Ubuntu","Unix"],
        "url": "https://www.jwillikers.com/manage-python-dependencies",
        "teaser": null
      },{
        "title": "Backup and Restore a GPG Key",
        "excerpt":"Gnu Privacy Guard, also known as GnuPG and GPG, is a handy tool for managing OpenPGP keys. While don&#8217;t use PGP keys for email encryption as many people do, I do use a PGP key to sign my work when using Git. PGP keys can be a bit nastier to...","categories": ["Systems"],
        "tags": ["Backups","GnuPG","GPG","OpenPGP","Ubuntu"],
        "url": "https://www.jwillikers.com/backup-and-restore-a-gpg-key",
        "teaser": null
      },{
        "title": "Generate a GPG Key",
        "excerpt":"GPG keys can be used to cryptographically sign Git commits, pushes, and tags. This associates your work with a particular identity. GPG is also used for encrypting and signing emails. To do these things, you first need a GPG key. Tutorial The instructions here describe the steps to generate a...","categories": ["Systems"],
        "tags": ["Backups","GnuPG","GPG","OpenPGP","Ubuntu"],
        "url": "https://www.jwillikers.com/generate-a-gpg-key",
        "teaser": null
      }]
